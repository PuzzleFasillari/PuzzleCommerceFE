import {
  AgeGroupEnum,
  DifficultyLevelEnum,
  PuzzleMaterialsEnum,
  PuzzleSizeEnum,
  PuzzleThemeEnum,
  PuzzleTypesEnum,
} from '@models/enums/puzzle-enum.model';

export interface CreateProductRequestModel {
  name: string;
  type: PuzzleTypesEnum;
  difficultyLevel: DifficultyLevelEnum;
  material: PuzzleMaterialsEnum;
  theme: PuzzleThemeEnum;
  size: PuzzleSizeEnum;
  price: number;
  ageGroup: AgeGroupEnum;
  description: string;
  file: File;
}
