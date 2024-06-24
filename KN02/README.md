# M165

## A
![alt text](https://github.com/duyminh-nguyen/m165DuyMinhNguyen/blob/main/KN02/ADiagrammVerbesserung.png)

### Spiel - Charakter (FinalFantasyGame - Character):

Ein Spiel kann verschiedene Charaktere enthalten (n).
Ein Charakter kann in verschiedenen Spielen auftreten (m).
Beziehung: n
(many-to-many)


### Charakter - Waffe (Character - Weapon):

Ein Charakter kann verschiedene Waffen besitzen (n).
Eine Waffe kann von verschiedenen Charakteren verwendet werden (m).
Beziehung: n
(many-to-many)

### Spiel - Entwickler (FinalFantasyGame - Developer):

Ein Spiel wird von einem Entwickler erstellt (1).
Ein Entwickler kann mehrere Spiele entwickeln (n).
Beziehung: 1
(one-to-many)

### Beziehungen
- Ein Spiel wird von einem Entwickler erstellt, und ein Entwickler kann mehrere Spiele entwickeln. 1:m
- Ein Spiel kann verschiedene Charaktere enthalten, und ein Charakter kann in verschiedenen Spielen auftreten. n:m
- Ein Charakter kann verschiedene Waffen besitzen, und eine Waffe kann von verschiedenen Charakteren verwendet werden. n:m

## B 
![alt text](https://github.com/duyminh-nguyen/m165DuyMinhNguyen/blob/main/KN02/BDiagrammVB.png)

Ich habe Developer und Game als Verschachtlung genommen, wegen 1:n

## C
![.js file](https://github.com/duyminh-nguyen/m165DuyMinhNguyen/blob/main/KN02/KN02.js)

