"use client";

import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

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

  if (happinessScore >= 8) {
    return "You radiate joy and spread happiness wherever you go! 🤩✨";
  } else if (happinessScore >= 5) {
    return "You are full of positivity and making the world a brighter place! 😃";
  } else if (happinessScore >= 3) {
    return "You have a gentle, happy vibe that makes people smile! 😊";
  } else {
    return "Happiness is all around, keep spreading those smiles! 😁";
  }
}

const getEmoticon = (value: number) => {
  if (value >= 1 && value <= 3) return "😊";
  if (value >= 4 && value <= 6) return "😁";
  if (value >= 7 && value <= 10) return "🤩";
  return "😊";
};

const HappinessForm = () => {
  const [sliderValues, setSliderValues] = useState<IPositivity>({
    positivity: 10,
    optimism: 10,
    smiles: 10,
  });

  const [happinessMessage, setHappinessMessage] = useState("");

  const handleCheckHappiness = () => {
    const message = Happiness(sliderValues);
    setHappinessMessage(message);
  };

  const sliders: (keyof IPositivity)[] = ["positivity", "optimism", "smiles"];

  return (
    <div className="max-w-md mx-auto p-4 space-y-6 w-full pt-24" id="happiness">
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
              onValueChange={(value) =>
                setSliderValues((prev) => ({
                  ...prev,
                  [slider]: value[0],
                }))
              }
              className="hover:cursor-pointer"
            />
          </div>
        ))}
      </div>

      <Button onClick={handleCheckHappiness} className="w-full mt-4">
        Let{`'`}s Check
      </Button>

      {happinessMessage && (
        <div className="mt-6 p-4 bg-gray-100 rounded-md">
          <p className="text-lg text-center">{happinessMessage}</p>
        </div>
      )}
    </div>
  );
};

export default HappinessForm;
