module.exports = {
  validateEmail: function (email) {
      const emailPattern = /^([a-zA-Z0-9])+([a-zA-Z0-9._%+-])+@([a-zA-Z0-9_.-])+\.(([a-zA-Z]){2,6})$/;
      return emailPattern.test(email);
  },

  validateName: function (name) {
      const namePattern = /^([a-zA-Z ]){1,20}$/;
      return namePattern.test(name);
  },

  validateUser: function (name, email, users) {
    const nameCheck = this.validateName(name);
    const emailCheck = this.validateEmail(email);

    if(!nameCheck && !emailCheck) {
      return 'Invalid Name and Email';
    }

    else if (!nameCheck && emailCheck) {
      return 'Invalid Name';
    }

    else if (nameCheck && !emailCheck) {
      return 'Invalid Email';
    }

    else if(_.find(users, findEmail => findEmail.email == email)) {
      return 'Email exists';
    }

    else {
      return null;
    }
  }
}
