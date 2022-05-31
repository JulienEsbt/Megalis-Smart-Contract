### Megalis Project - V1 du Smart Contract
<br>

##### Pour commencer voici  les fonctionnalités que nous voudrions ajouter à notre SmartContract :
- Avec signature : 
```
fonction publier(siren,hash_du_pdf,url_doc,durée)
-> ajoute une publication avec les infos données en paramètre + date du jour
```

- Sans signature : 
```
fonction listerPublication(siren)
-> liste toutes les publications d'un siren

fonction listerPublicationEnCours(siren)
-> liste toutes les publications d'un siren qui repecte le critère date_publication + durée

fonction listerPublication()
-> liste toutes les publications
```