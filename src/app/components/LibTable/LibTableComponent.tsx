import React from "react";
import { Snippet, Chip } from "@nextui-org/react";

const librariesAndTools = [
  { library: "numpy", tools: "np", statusLabel: "Aktif", statusClass: "success" },
  { library: "tensorflow", tools: "tf", statusLabel: "Aktif", statusClass: "success" },
  { library: "tensorflow.keras.utils", tools: "to_categorical", statusLabel: "Aktif", statusClass: "success" },
  { library: "sklearn.model_selection", tools: "train_test_split", statusLabel: "Aktif", statusClass: "success" },
  { library: "tensorflow.keras.models", tools: "Sequential", statusLabel: "Aktif", statusClass: "success" },
  { library: "tensorflow.keras.layers", tools: "Conv2D, MaxPooling2D, Flatten, Dense, Dropout, BatchNormalization", statusLabel: "Aktif", statusClass: "success" },
  { library: "tensorflow.keras.optimizers", tools: "Adam", statusLabel: "Aktif", statusClass: "success" },
  { library: "tensorflow.keras.preprocessing.image", tools: "ImageDataGenerator", statusLabel: "Aktif", statusClass: "success" },
  { library: "tensorflow.keras.callbacks", tools: "EarlyStopping, ReduceLROnPlateau, ModelCheckpoint", statusLabel: "Aktif", statusClass: "success" },
  { library: "sklearn.utils.class_weight", tools: "compute_class_weight", statusLabel: "Aktif", statusClass: "success" },
  { library: "tensorflow.keras.applications", tools: "VGG16", statusLabel: "Aktif", statusClass: "success" },
];

export default function LibTableComponent() {
  return (
    <div className="flex flex-wrap gap-4">
    {librariesAndTools.map((item, index) => (
      <div key={index} className="flex items-center desktop:mb-4 mobile:mb-2">
        <Snippet hideCopyButton hideSymbol color="default">
            <div className="flex flex-row w-full items-center gap-3">

          <text>
          {item.library}
          </text>
          <Chip size="sm" className="p-0 pl-1" color={"success"} variant="dot"></Chip>
            </div>
        </Snippet>
      </div>
    ))}
  </div>
  );
}
