const validatedAs={
    isUppercase: {
        errorMessage: 'Field name must be corrected',
        negated: true,
    }
}
export const registrationFormSchema ={
   'phoneNumbers.homePhone': validatedAs,
   'phoneNumbers.workPhone': validatedAs,
   'phoneNumbers.mobilePhone':validatedAs,
   'firstName':validatedAs,
   'lastName':validatedAs
}