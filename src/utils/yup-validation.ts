

export function YupValidation(Yup, errors, formRef) {
  if (errors instanceof Yup.ValidationError) {
    const errorMessages: Record<string, string> = {};

    errors.inner.forEach((error: any) => {
      if(error.path === "gender") {
        errorMessages["genderDesktop"] = error.message;
        errorMessages["genderMobile"] = error.message;
        return;
      }
      errorMessages[error.path] = error.message;
    });

    formRef.current?.setErrors(errorMessages);
  }
}
