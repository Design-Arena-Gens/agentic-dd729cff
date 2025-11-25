'use client'

import StorySection from '../components/StorySection';
import { useEffect, useState } from 'react';

function ProgressBar() {
  const [w, setW] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
      setW(pct);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="progress" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(w)}>
      <span style={{ '--w': `${w}%` }} />
    </div>
  );
}

export default function Page() {
  return (
    <main>
      <div className="container">
        <div className="hero card">
          <span className="pill" aria-hidden="true">?? A tiny story of grit and grace</span>
          <h1>A Puppy?s First Warm Meal</h1>
          <p>
            In a small village, a poor puppy finds kindness, work, and warmth. Follow his journey
            from hunger to hope, and the gratitude that lights his heart.
          </p>
          <ProgressBar />
        </div>

        <div className="grid" style={{ marginTop: 16 }}>
          <StorySection
            title="By the tea stall"
            tag="Beginning"
            emoji="??"
            tone="sad"
          >
            A poor puppy, dressed in torn clothes full of holes, sat outside a tea stall in a small
            village. His stomach growled with hunger as he watched others sipping hot tea and eating
            biscuits. He asked the shopkeeper for a little food, but the man scolded him and chased
            him away. The puppy sat by the dusty road and cried.
          </StorySection>

          <StorySection
            title="A kind rickshaw puller"
            tag="A chance"
            emoji="??"
            tone="hope"
          >
            After some time, a kind rickshaw puller saw him and felt pity. The rickshaw puller gave
            him work?washing his rickshaw every morning. Though weak and tired, the poor puppy worked
            hard, scrubbing and cleaning with his small paws.
          </StorySection>

          <StorySection
            title="First earnings"
            tag="Hope grows"
            emoji="????"
            tone="neutral"
          >
            Slowly, he earned a few rupees. With his first savings, the poor puppy went to the
            market and bought a packet of warm samosas.
          </StorySection>

          <StorySection
            title="Under the banyan tree"
            tag="Joy"
            emoji="????"
            tone="warm"
          >
            Sitting under a banyan tree, he ate happily for the first time in days. Later, the rickshaw
            puller also gifted him a small woolen blanket for the cold nights.
          </StorySection>

          <StorySection
            title="Peace and gratitude"
            tag="Rest"
            emoji="????"
            tone="cozy"
          >
            Wrapping himself in it, the poor puppy finally slept peacefully, his heart filled with
            gratitude.
          </StorySection>
        </div>

        <p className="footer">
          Built with ?? ? Be kind, always.
        </p>
      </div>
    </main>
  );
}

