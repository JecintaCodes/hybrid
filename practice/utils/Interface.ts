export interface iAuth{
    userName?:string
    email?:string
    password?:string
    confirmPassword?:string
    avatar?:string
}

export interface iTask {
    task?: string;
    avatar?: string;
    name?: string;
    priority?: string;
    stateData?: boolean;
    stepToggle?: boolean;
    step?: {}[];
  }
  