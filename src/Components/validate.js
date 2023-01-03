export const validate =data =>{

    const errors={};

    if(!data.name ){
        errors.name="Username is required"
    }else{
        delete errors.name;
    }

    if(!data.email){
        errors.email="Email is required"
    }else if(!/\S+@\S+\.\S+/.test(data.email)){
        errors.email ="Email is not valid"
    }else{
        delete errors.email;
    }

    if(!data.password){
        errors.password="Password is required"
    }else if(data.password.length < 6){
        errors.password="Password should be 6 character or more"
    }else{
        delete errors.password;
    }

    if(!data.confirmPassword){
        errors.confirmPassword="Confirm your password "
    }else if(data.confirmPassword !== data.password){
        errors.confirmPassword="Password not match"
    }else{
        delete errors.confirmPassword;
    }

    if(data.isAccepted){
        delete errors.isAccepted
    }else{
        errors.isAccepted="Accept our regulation"
    }
    

    return errors;
}