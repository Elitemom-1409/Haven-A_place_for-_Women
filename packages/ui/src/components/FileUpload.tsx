'use client';

import * as React from 'react';
import { cn } from '@haven/utils';
import { motion } from 'framer-motion';

interface FileUploadProps {
  accept?: string;
  maxSize?: number;
  multiple?: boolean;
  onFilesSelected: (files: File[]) => void;
  className?: string;
}

export function FileUpload({ accept, maxSize = 5 * 1024 * 1024, multiple, onFilesSelected, className }: FileUploadProps) {
  const [isDragOver, setIsDragOver] = React.useState(false);
  const [files, setFiles] = React.useState<File[]>([]);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleFiles = (newFiles: FileList | null) => {
    if (!newFiles) return;
    const validFiles = Array.from(newFiles).filter((f) => !maxSize || f.size <= maxSize);
    setFiles((prev) => (multiple ? [...prev, ...validFiles] : validFiles));
    onFilesSelected(multiple ? [...files, ...validFiles] : validFiles);
  };

  return (
    <div
      onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
      onDragLeave={() => setIsDragOver(false)}
      onDrop={(e) => { e.preventDefault(); setIsDragOver(false); handleFiles(e.dataTransfer.files); }}
      onClick={() => inputRef.current?.click()}
      className={cn(
        'relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors',
        isDragOver ? 'border-accent-gold bg-accent-gold/5' : 'border-medium-gray/30 hover:border-medium-gray/50',
        className
      )}
    >
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />
      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-light-gray dark:bg-dark-elevated flex items-center justify-center text-2xl">
        📎
      </div>
      <p className="text-body font-medium text-charcoal dark:text-warm-ivory mb-1">
        {isDragOver ? 'Drop files here' : 'Click or drag files to upload'}
      </p>
      <p className="text-caption text-medium-gray">
        {maxSize ? `Max file size: ${(maxSize / 1024 / 1024).toFixed(0)}MB` : 'No size limit'}
      </p>

      {files.length > 0 && (
        <div className="mt-4 space-y-2">
          {files.map((file, i) => (
            <motion.div
              key={`${file.name}-${i}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-between px-3 py-2 rounded-lg bg-white dark:bg-dark-surface border border-medium-gray/20"
            >
              <span className="text-body-sm text-charcoal dark:text-warm-ivory truncate">{file.name}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const newFiles = files.filter((_, idx) => idx !== i);
                  setFiles(newFiles);
                  onFilesSelected(newFiles);
                }}
                className="text-medium-gray hover:text-error-red ml-2"
              >
                ×
              </button>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
