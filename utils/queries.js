import { contract } from ".";

function parseErrorMsg(e){
    const json=JSON.parse(JSON.stringify(e));
    return json?.reason || json?.error?.message;
}

export async function getUsernameByAddress(userAddress){
    try {
        const contractobj=await contract();
        const username=await contractobj.getUsernameByAddress(userAddress);
        return username
        
    } catch (error) {
        console.log(error);
        return parseErrorMsg(error);
        
    }
}
export async function createUser( username, basicInfo,
     professionalInfo,
     socialLinks,
    visibility    ){
try {

    const contractobj=await contract();
    const transactionResponse=await contractobj.createUser(username,basicInfo,
    professionalInfo,socialLinks,visibility);
    const recipt=await transactionResponse.wait();
    return recipt;
    
} catch (error) {
    console.log(error);
    return parseErrorMsg(error);
    
}

}
export async function editUser(username, basicInfo,
    professionalInfo,
    socialLinks,
   visibility ){
    
        try {
        
            const contractobj=await contract();
            const transactionResponse=await contractobj.editUser(username,basicInfo,
            professionalInfo,socialLinks,visibility);
            const recipt=await transactionResponse.wait();
            return recipt;
            
        } catch (error) {
            console.log(error);
            return parseErrorMsg(error);
            
        }
    
    


}
export async function getUserByUsername(userName){
    try{
    const contractobj=await contract();
    const username=await contractobj.getUserByUsername(userName);
    return {

        basicInfo: {
            firstName: user.basicInfo.firstName,
            lastName: user.basicInfo.lastName,
            email: user.basicInfo.email,
            homeAddress: user.basicInfo.homeAddress,
            dateOfBirth: user.basicInfo.dateOfBirth,
            phoneNumber: user.basicInfo.phoneNumber,
          },
          professionalInfo: {
            education: user.professionalInfo.education,
            workHistory: user.professionalInfo.workHistory,
            jobTitle: user.professionalInfo.jobTitle,
            info: user.professionalInfo.info,
            skills: user.professionalInfo.skills,
            imageURL: user.professionalInfo.imageURL,
          },
          socialLinks: {
            x: user.socialLinks.x,
            instagram: user.socialLinks.instagram,
            tiktok: user.socialLinks.tiktok,
            youtube: user.socialLinks.youtube,
            linkedin: user.socialLinks.linkedin,
          },
          visibility: {
            education: user.visibility.education,
            workHistory: user.visibility.workHistory,
            phoneNumber: user.visibility.phoneNumber,
            homeAddress: user.visibility.homeAddress,
            dateOfBirth: user.visibility.dateOfBirth,
          },
        };



}
    catch(error)
    {
        console.log(error);
        return parseErrorMsg(error);


    }
}
export async function getUserByAddress(userAddress) {
    try {
        const contractobj=await contract();
        const userAddress=await contractobj.getUserByAddress(userAddress);
        return {
         basicInfo: {
                firstName: user.basicInfo.firstName,
                lastName: user.basicInfo.lastName,
                email: user.basicInfo.email,
                homeAddress: user.basicInfo.homeAddress,
                dateOfBirth: user.basicInfo.dateOfBirth,
                phoneNumber: user.basicInfo.phoneNumber,
              },
              professionalInfo: {
                education: user.professionalInfo.education,
                workHistory: user.professionalInfo.workHistory,
                jobTitle: user.professionalInfo.jobTitle,
                info: user.professionalInfo.info,
                skills: user.professionalInfo.skills,
                imageURL: user.professionalInfo.imageURL,
              },
              socialLinks: {
                x: user.socialLinks.x,
                instagram: user.socialLinks.instagram,
                tiktok: user.socialLinks.tiktok,
                youtube: user.socialLinks.youtube,
                linkedin: user.socialLinks.linkedin,
              },
              visibility: {
                education: user.visibility.education,
                workHistory: user.visibility.workHistory,
                phoneNumber: user.visibility.phoneNumber,
                homeAddress: user.visibility.homeAddress,
                dateOfBirth: user.visibility.dateOfBirth,
              },

        }
        
    }catch (error) {
        console.log(error);
        return parseErrorMsg(error);
        
    }
    
}
export async function addjob(userName,jobId) {
    try {
        const contractobj=await contract();
        const transactionResponse=await contractobj.addjob(userName,jobId);
        const recipt =await transactionResponse.wait();
        return recipt;
        
    } catch (error) {
        console.log(error);
        parseErrorMsg(error);
    }
    
}
export async function getJobs(username) {
    try {
      const contractObj = await contract();
      const jobIds = await contractObj.getJobs(username);
      return jobIds.map((jobId) => jobId.toString());
    } catch (e) {
      console.error("Error in getJobs:", e);
      return parseErrorMsg(e);
    }
  }
  export async function setVisibility(
    username,
    education,
    workHistory,
    phoneNumber,
    homeAddress,
    dateOfBirth
  ) {
    try {
      const contractObj = await contract();
      const transactionResponse = await contractObj.setVisibility(
        username,
        education,
        workHistory,
        phoneNumber,
        homeAddress,
        dateOfBirth
      );
      const receipt = await transactionResponse.wait();
      return receipt;
    } catch (e) {
      console.error("Error in setVisibility:", e);
      return parseErrorMsg(e);
    }
  }
  

  export async function getVisibility(username) {
    try {
      const contractObj = await contract();
      const visibility = await contractObj.getVisibility(username);
      return {
        education: visibility.education,
        workHistory: visibility.workHistory,
        phoneNumber: visibility.phoneNumber,
        homeAddress: visibility.homeAddress,
        dateOfBirth: visibility.dateOfBirth,
      };
    } catch (e) {
      console.error("Error in getVisibility:", e);
      return parseErrorMsg(e);
    }
  }