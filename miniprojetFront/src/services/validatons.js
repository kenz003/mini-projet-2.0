export default class Validations {
    static checkEmail(email) {
      // Utilisation de l'expression régulière pour valider l'e-mail
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true; // L'e-mail est valide
      } else {
        return false; // L'e-mail n'est pas valide
      }
    }
  
    static minLength(name, minLength) {
      // Vérifier si la longueur de la chaîne est supérieure ou égale à la longueur minimale spécifiée
      if (name.length > minLength) {
        return true; // La longueur est conforme
      } else {
        return false; // La longueur ne correspond pas
      }
    }
  }
