'use client';

import { Container, Avatar } from '@haven/ui';

const conversations = [
  { name: 'Michelle R.', initial: 'M', color: 'bg-dusty-rose/30', message: 'Are you still going to the hike on Saturday?', time: '2m', unread: true },
  { name: 'Jennifer K.', initial: 'J', color: 'bg-soft-sage/30', message: 'Thanks for the resume tips!', time: '1h', unread: false },
  { name: 'Angela T.', initial: 'A', color: 'bg-accent-gold/30', message: 'The kids had so much fun!', time: '3h', unread: false },
];

export default function MessagesPage() {
  return (
    <main className="min-h-screen bg-warm-ivory dark:bg-dark-base pb-24">
      <section className="pt-24 pb-8">
        <Container>
          <div className="bg-white dark:bg-dark-surface rounded-2xl border border-medium-gray/10 overflow-hidden flex h-[70vh]">
            {/* Conversations List */}
            <div className="w-full md:w-80 border-r border-medium-gray/10 flex flex-col">
              <div className="p-4 border-b border-medium-gray/10">
                <h2 className="font-heading text-xl text-charcoal dark:text-warm-ivory">Messages</h2>
              </div>
              <div className="flex-1 overflow-y-auto">
                {conversations.map((conv, i) => (
                  <div
                    key={i}
                    className={`p-4 flex items-center gap-3 cursor-pointer transition-colors ${
                      conv.unread ? 'bg-accent-gold/5 border-l-2 border-accent-gold' : 'hover:bg-light-gray dark:hover:bg-dark-elevated'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full ${conv.color} flex items-center justify-center font-medium text-charcoal flex-shrink-0`}>
                      {conv.initial}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-charcoal dark:text-warm-ivory truncate">{conv.name}</p>
                        <span className="text-xs text-medium-gray">{conv.time}</span>
                      </div>
                      <p className={`text-xs truncate ${conv.unread ? 'text-charcoal dark:text-warm-ivory' : 'text-medium-gray'}`}>
                        {conv.message}
                      </p>
                    </div>
                    {conv.unread && <span className="w-2 h-2 rounded-full bg-accent-gold flex-shrink-0" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="hidden md:flex flex-1 flex-col">
              <div className="p-4 border-b border-medium-gray/10 flex items-center gap-3">
                <Avatar name="Michelle R." size="sm" />
                <div>
                  <p className="font-medium text-charcoal dark:text-warm-ivory">Michelle R.</p>
                  <p className="text-xs text-success-green">Online</p>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <div className="flex justify-end">
                  <div className="bg-accent-gold/20 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[70%]">
                    <p className="text-sm text-charcoal dark:text-warm-ivory">Hey! Are you still going to the hike on Saturday?</p>
                    <span className="text-xs text-medium-gray mt-1 block">10:30 AM</span>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-light-gray dark:bg-dark-elevated rounded-2xl rounded-tl-sm px-4 py-3 max-w-[70%]">
                    <p className="text-sm text-charcoal dark:text-warm-ivory">Yes! I&apos;m so excited. It&apos;s been ages since I&apos;ve been to Red Rocks.</p>
                    <span className="text-xs text-medium-gray mt-1 block">10:32 AM</span>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-accent-gold/20 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[70%]">
                    <p className="text-sm text-charcoal dark:text-warm-ivory">Same! Do you want to carpool? I can pick you up at 3.</p>
                    <span className="text-xs text-medium-gray mt-1 block">10:33 AM</span>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-medium-gray/10">
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-3 rounded-xl border border-medium-gray/20 focus:outline-none focus:ring-2 focus:ring-accent-gold/50 text-charcoal dark:text-warm-ivory text-sm bg-transparent"
                  />
                  <button className="px-6 py-3 rounded-xl bg-accent-gold text-charcoal font-medium hover:bg-accent-gold/90 transition-colors">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
