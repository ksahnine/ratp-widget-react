# [Blog] React ou l'art de la composition
Ce dépôt contient le code source d'un widget développé avec [**React**](https://facebook.github.io/react/) et illustrant l'article intitulé [*React ou l'art de la composition*](http://blog.inovia-conseil.fr/?p=242) publié sur [mon blog](http://blog.inovia-conseil.fr/) :
![Widget RATP](http://ksahnine.github.io/assets/article_images/ratp-widget.gif)

Le rendu du widget est issu du code JSX suivant :

```
<RatpWidget type="metro" line="11" station="belleville" direction="chatelet" />
```

Les données du trafic proviennent de [l'excellente API REST](https://github.com/pgrimaud/horaires-ratp-api) de [Pierre Grimaud](https://github.com/pgrimaud).
