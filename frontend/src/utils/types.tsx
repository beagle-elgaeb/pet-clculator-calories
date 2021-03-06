import { ChangeEvent, KeyboardEvent as ReactKeyboardEvent } from "react";
import { MealItem } from "../redux/types";

// Типы пропсов

export type AppLayoutProps = {
  handleMenuClick: () => void;
  menuPopupOpen: boolean;
};

export type ProfileProps = {
  loadProfile: () => void;
};

export type AuthenticationProps = {
  loadProfile: () => void;
};

export type HeaderProps = {
  onMenuClick: () => void;
  popupOpened: boolean;
};

export type CalculatorProps = {
  handleMealClick: (meal: MealItem) => void;
};

export type CalculatorFormProps = {
  visible: boolean;
};

export type DaysProps = {
  handleMealClick: (meal: MealItem) => void;
};

export type MealsProps = {
  date: number;
  handleMealClick: (meal: MealItem) => void;
};

export type MealProps = {
  meal: MealItem;
  handleMealClick: (meal: MealItem) => void;
};

export type InfographicsProps = {
  summCalories: number;
  summProtein: number;
  summFat: number;
  summCarb: number;
  date: number;
};

export type MenuPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  onKeydown: (evt: KeyboardEvent) => void;
  onLogout: () => void;
};

export type MealPopupProps = {
  data: MealItem | undefined;
  isOpen: boolean;
  onClose: () => void;
  onKeydown: (evt: KeyboardEvent) => void;
};

export type SavedMealProps = {
  data: MealItem | undefined;
  setEditedForm: (value: boolean) => void;
};

export type MealFormProps = {
  data: MealItem | undefined;
  setEditedForm: (value: boolean) => void;
  onClose: () => void;
};

export type SavedProfileProps = {
  setEditedForm: (value: boolean) => void;
};

export type ProfileFormProps = {
  setEditedForm: (value: boolean) => void;
  loadProfile: () => void;
};

export type MenuProps = {
  onClose: () => void;
};

export type LogoProps = {
  opened?: boolean;
  onClickHandle?: () => void;
};

export type InputProps = {
  formik: any;
  value: string | number;
  name: string;
  type?: string;
  placeholder: string;
  onKeyPress?: (evt: ReactKeyboardEvent<HTMLInputElement>) => void;
  handleChange: (evt: ChangeEvent<HTMLInputElement>, formik?: any) => void;
  onFocus?: () => void;
  startWeight?: boolean;
};

export type InputSelectPropsType = {
  formik: any;
  value: string | number;
  name: string;
  placeholder: string;
  options: { value: number; span: string; text: string }[];
};

// Типы значений

export type MealsInputValues = {
  name: string;
  startWeight: string;
  protein: string;
  fat: string;
  carb: string;
  weight: string;
};

export type ProfileInputValues = {
  name: string;
  email: string;
  age: string;
  stature: string;
  weight: string;
  sex: number;
  activityLevel: number;
  target: number;
};

export type UserType = {
  id?: number;
  name?: string;
  email?: string;
  age: number;
  stature: number;
  weight: number;
  sex: number;
  activityLevel: number;
  target: number;
};
