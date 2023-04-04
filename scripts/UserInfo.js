export default class UserInfo{
  constructor(elementNameUser, elementJobUser){
    this.elementNameUser = document.querySelector(elementNameUser);
    this.elementJobUser = document.querySelector(elementJobUser);
    this.profileName = document.querySelector('.profile__name');
    this.profileJob = document.querySelector('.profile__job');  
  }
  getUserInfo(){
    return {
      inputName: this.elementNameUser.textContent,
      inputJob: this.elementJobUser.textContent
    }
  }
  setUserInfo(data){
    this.profileName.textContent = data.inputName;
    this.profileJob.textContent = data.inputJob;
  }
}