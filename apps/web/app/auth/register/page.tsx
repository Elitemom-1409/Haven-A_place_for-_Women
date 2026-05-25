'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Input, Stepper, Container } from '@haven/ui';
import { useRouter } from 'next/navigation';

const steps = ['Account', 'About You', 'Your Journey', 'Interests', 'Community'];

const interests = [
  'Hiking & Outdoors', 'Fitness & Wellness', 'Book Club', 'Career Development',
  'Legal Support', 'Financial Planning', 'Parenting', 'Cooking',
  'Art & Creativity', 'Travel', 'Meditation & Mindfulness', 'Volunteering',
  'Tech & Learning', 'Social Events', 'Support Groups', 'Photography',
  'Music', 'Gardening', 'Pet Lovers', 'Gaming',
];

const journeyStages = [
  'Considering divorce',
  'Currently going through divorce',
  'Recently divorced (< 1 year)',
  'Divorced (1-3 years)',
  'Divorced (3+ years)',
  'Prefer not to say',
];

export default function RegisterPage() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(0);
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    location: '',
    journey: '',
    hasChildren: '',
    interests: [] as string[],
    selectedGroups: [] as string[],
  });

  const updateField = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleInterest = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const nextStep = () => {
    if (step < steps.length - 1) {
      setDirection(1);
      setStep(step + 1);
    } else {
      router.push('/home');
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setDirection(-1);
      setStep(step - 1);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const canProceed = () => {
    switch (step) {
      case 0: return formData.email && formData.password.length >= 8;
      case 1: return formData.firstName && formData.lastName;
      case 2: return true;
      case 3: return formData.interests.length >= 3;
      case 4: return true;
      default: return false;
    }
  };

  return (
    <div className="min-h-screen bg-warm-ivory dark:bg-dark-base py-12 px-4">
      <Container size="narrow">
        <div className="mb-8">
          <Stepper steps={steps} currentStep={step} />
        </div>

        <div className="bg-white dark:bg-dark-surface rounded-2xl shadow-lg-xl p-8 md:p-12 min-h-[500px] relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {step === 0 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="font-heading text-h2 text-charcoal dark:text-warm-ivory mb-2">Create Your Account</h2>
                    <p className="text-body text-medium-gray">Start your journey to a supportive community</p>
                  </div>

                  <Input
                    label="Email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                  />

                  <div>
                    <Input
                      label="Password"
                      type="password"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) => updateField('password', e.target.value)}
                    />
                    <div className="mt-2 h-1 bg-light-gray rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-accent-gold"
                        initial={{ width: '0%' }}
                        animate={{ width: `${Math.min((formData.password.length / 12) * 100, 100)}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>

                  <label className="flex items-start gap-3 text-body-sm text-medium-gray">
                    <input type="checkbox" className="mt-1 rounded border-medium-gray/30" required />
                    <span>I agree to the <a href="/legal/terms" className="text-accent-gold hover:underline">Terms of Service</a> and <a href="/legal/privacy" className="text-accent-gold hover:underline">Privacy Policy</a></span>
                  </label>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="font-heading text-h2 text-charcoal dark:text-warm-ivory mb-2">Tell Us About You</h2>
                    <p className="text-body text-medium-gray">Help us personalize your experience</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="First Name"
                      placeholder="Jane"
                      value={formData.firstName}
                      onChange={(e) => updateField('firstName', e.target.value)}
                    />
                    <Input
                      label="Last Name"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => updateField('lastName', e.target.value)}
                    />
                  </div>

                  <Input
                    label="Location"
                    placeholder="City, State"
                    value={formData.location}
                    onChange={(e) => updateField('location', e.target.value)}
                    helperText="We'll use this to find local groups and events"
                  />
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="font-heading text-h2 text-charcoal dark:text-warm-ivory mb-2">Your Journey</h2>
                    <p className="text-body text-medium-gray">This helps us tailor support to your needs</p>
                  </div>

                  <div className="space-y-3">
                    <label className="text-body-sm font-medium text-charcoal dark:text-warm-ivory">
                      Where are you in your journey?
                    </label>
                    <div className="grid gap-3">
                      {journeyStages.map((stage) => (
                        <button
                          key={stage}
                          onClick={() => updateField('journey', stage)}
                          className={`p-4 rounded-xl border-2 text-left transition-all ${
                            formData.journey === stage
                              ? 'border-accent-gold bg-accent-gold/5'
                              : 'border-medium-gray/20 hover:border-medium-gray/40'
                          }`}
                        >
                          <span className="text-body text-charcoal dark:text-warm-ivory">{stage}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-body-sm font-medium text-charcoal dark:text-warm-ivory">
                      Do you have children?
                    </label>
                    <div className="flex gap-3">
                      {['Yes', 'No', 'Prefer not to say'].map((option) => (
                        <button
                          key={option}
                          onClick={() => updateField('hasChildren', option)}
                          className={`flex-1 py-3 rounded-xl border-2 transition-all ${
                            formData.hasChildren === option
                              ? 'border-accent-gold bg-accent-gold/5 text-charcoal dark:text-warm-ivory'
                              : 'border-medium-gray/20 text-medium-gray hover:border-medium-gray/40'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="font-heading text-h2 text-charcoal dark:text-warm-ivory mb-2">Your Interests</h2>
                    <p className="text-body text-medium-gray">
                      Select at least 3 topics you're interested in
                    </p>
                    <p className="text-caption text-accent-gold mt-2">
                      {formData.interests.length} selected
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {interests.map((interest) => {
                      const isSelected = formData.interests.includes(interest);
                      return (
                        <button
                          key={interest}
                          onClick={() => toggleInterest(interest)}
                          className={`px-4 py-2 rounded-full border-2 text-body-sm transition-all ${
                            isSelected
                              ? 'border-accent-gold bg-accent-gold/10 text-charcoal dark:text-warm-ivory'
                              : 'border-medium-gray/20 text-medium-gray hover:border-medium-gray/40'
                          }`}
                        >
                          {interest}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="font-heading text-h2 text-charcoal dark:text-warm-ivory mb-2">Find Your Community</h2>
                    <p className="text-body text-medium-gray">Based on your location and interests</p>
                  </div>

                  <div className="space-y-4">
                    {[
                      { name: 'Denver Divorce Support', members: 1240, desc: 'A safe space to share and heal' },
                      { name: 'Single Moms Hiking Club', members: 856, desc: 'Weekly trails, kid-friendly' },
                      { name: 'Career Reboot Workshop', members: 2340, desc: 'Professional development' },
                      { name: 'Mindful Mornings', members: 567, desc: 'Meditation and wellness' },
                    ].map((group, i) => (
                      <div
                        key={group.name}
                        className="flex items-center justify-between p-4 rounded-xl border border-medium-gray/20 hover:border-accent-gold/50 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-dusty-rose/20 flex items-center justify-center text-lg">
                            {['👥', '🥾', '💼', '🧘'][i]}
                          </div>
                          <div>
                            <h4 className="font-medium text-charcoal dark:text-warm-ivory">{group.name}</h4>
                            <p className="text-caption text-medium-gray">{group.members} members • {group.desc}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            const newGroups = formData.selectedGroups.includes(group.name)
                              ? formData.selectedGroups.filter((g) => g !== group.name)
                              : [...formData.selectedGroups, group.name];
                            updateField('selectedGroups', newGroups);
                          }}
                          className={`px-4 py-2 rounded-full text-body-sm font-medium transition-colors ${
                            formData.selectedGroups.includes(group.name)
                              ? 'bg-soft-sage text-charcoal'
                              : 'bg-accent-gold text-charcoal'
                          }`}
                        >
                          {formData.selectedGroups.includes(group.name) ? 'Joined' : 'Join'}
                        </button>
                      </div>
                    ))}
                  </div>

                  <p className="text-center text-caption text-medium-gray">
                    You can always find more groups later
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between mt-8 pt-8 border-t border-medium-gray/10">
            <Button
              variant="ghost"
              onClick={prevStep}
              disabled={step === 0}
            >
              Back
            </Button>

            <Button
              onClick={nextStep}
              disabled={!canProceed()}
              className={step === steps.length - 1 ? 'bg-charcoal text-warm-ivory hover:bg-charcoal/90' : ''}
            >
              {step === steps.length - 1 ? 'Enter Haven 🎉' : 'Continue'}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
