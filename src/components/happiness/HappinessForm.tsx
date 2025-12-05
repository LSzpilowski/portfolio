"use client";

import React, { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";

interface IPositivity {
  positivity: number;
  optimism: number;
  smiles: number;
}

function Happiness({ positivity, optimism, smiles }: IPositivity) {
  const positivityFactor = 0.4;
  const optimismFactor = 0.3;
  const smileFactor = 0.3;

  const happinessScore =
    positivity * positivityFactor +
    optimism * optimismFactor +
    smiles * smileFactor;

  if (positivity >= 8 && optimism >= 8 && smiles <= 2) {
    return "Your happiness is glowing inside – share it with the world by letting yourself smile! 🙂";
  }

  if (positivity <= 2 && optimism <= 2 && smiles >= 8) {
    return "Your smile is brave, but remember, it's okay to let yourself feel low sometimes.";
  }

  if (happinessScore >= 9) {
    return "Your happiness shines through – it's vibrant, warm, and genuinely inspiring to others. 🤩✨";
  } else if (happinessScore >= 7) {
    return "Your positive energy is easy to notice – you brighten the space around you without even trying. 😁";
  } else if (happinessScore >= 5) {
    return "You're carrying a solid, balanced sense of optimism. It feels authentic and uplifting to be around. 😃";
  } else if (happinessScore >= 3) {
    return "There's a quiet, gentle positivity in you. It might not be loud, but it's there – and it matters more than you think. 😊";
  } else {
    return "Looks like your energy is running low. That's completely okay – everyone has days like this. Be gentle with yourself and take a moment to recharge. 🤞";
  }
}

const getEmoticon = (value: number) => {
  if (value <= 2) return "😐";
  if (value <= 4) return "😊";
  if (value <= 6) return "😃";
  if (value <= 8) return "😁";
  return "🤩";
};

const HappinessForm = () => {
  const [sliderValues, setSliderValues] = useState<IPositivity>({
    positivity: 10,
    optimism: 10,
    smiles: 10,
  });

  const [happinessMessage, setHappinessMessage] = useState("Let's check!");
  const [isVisible, setIsVisible] = useState(true);
  const [isActivated, setIsActivated] = useState(false);

  useEffect(() => {
    if (!isActivated) return;
    
    const message = Happiness(sliderValues);
    
    if (message === happinessMessage) {
      return;
    }
    
    setIsVisible(false);
    setTimeout(() => {
      setHappinessMessage(message);
      setIsVisible(true);
    }, 300);
  }, [sliderValues, happinessMessage, isActivated]);

  const handleBoxClick = () => {
    if (!isActivated) {
      setIsActivated(true);
      const message = Happiness(sliderValues);
      setIsVisible(false);
      setTimeout(() => {
        setHappinessMessage(message);
        setIsVisible(true);
      }, 300);
    }
  };

  const handleSliderChange = (slider: keyof IPositivity, value: number) => {
    setSliderValues((prev) => ({
      ...prev,
      [slider]: value,
    }));
    
    if (!isActivated) {
      setIsActivated(true);
    }
  };

  const sliders: (keyof IPositivity)[] = ["positivity", "optimism", "smiles"];

  return (
    <div className="max-w-md mx-auto  w-full pt-6 lg:pt-24 " id="happiness">
      <div className="p-4 space-y-6 hover:bg-secondary rounded-xl transition ease-in-out duration-300">
        <h2 className="text-2xl font-bold text-center">How happy you are?</h2>
        <div className="flex flex-col gap-5">
          {sliders.map((slider, index) => (
            <div key={index}>
              <label className="block font-medium mb-1">
                {slider.charAt(0).toUpperCase() + slider.slice(1)}{" "}
                {getEmoticon(sliderValues[slider])}
              </label>
              <Slider
                defaultValue={[sliderValues[slider]]}
                max={10}
                step={1}
                onValueChange={(value) => handleSliderChange(slider, value[0])}
                className="hover:cursor-pointer"
              />
            </div>
          ))}
        </div>

        <div 
          onClick={handleBoxClick}
          className={`mt-6 p-4 rounded-md transition-opacity duration-400 h-[120px] flex items-center justify-center cursor-pointer ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="text-lg text-center">{happinessMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default HappinessForm;
