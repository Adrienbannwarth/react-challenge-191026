export default ({
  signIn: () => `/login`, // POST requis mail password
    // /faculty GET
    // /promo GET
  account: () => `/account`, // GET besoin du token dans la requetes
    // /account/update PUT requis firstName lastName mail idMainSkill token requis dans le header
    // /student GET besoin du token dans la requetes renvoi la liste des etudiant de ta classe et promo
});
