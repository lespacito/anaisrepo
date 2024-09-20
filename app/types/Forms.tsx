export interface FormsType {
  control?: any;
  onSubmit: any;
  errors: any;
  isLoading: boolean;
  register: any;
  handleSubmit: any;
}

export interface RegisterFormFieldsType {
  email: string;
  password: string;
  howDidHear: string;
}

export interface LoginFormFieldsType {
  email: string;
  password: string;
}

export interface ForgotFormFieldsType {
  email: string;
}

export interface OnboardingProfileFormFIelds {
  displayName: string;
  bio: string;
  favoritepass: string;
}

export interface UploadPostFormFieldsType {
  titre: string;
  content: string;
  imageUrl: string;
}
