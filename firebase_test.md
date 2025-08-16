
# DB schema (diagnostic collection)

```json
        {
            userId: Reference,
            costumer:({
                nom:"String",
                prenom:"String"
                numero_de_tel:"String"|null
            }|null),
            imgs: diagnosticPhotoUrl:"String",
                
            // the creatirea of score and there values example 
            score:{
                crat:"Number"
            }
            recommandation:["Bar-Code"]
                    
                
        }
```
## recommandation feald clarification
as of my knowledge in a `cosmetic` recommandation the persone may need multiple `products` so it make more sienc to be recommandation `array` insted of `single element` 
> **correct me if isnt the case**

## costumer feald clarification 
the `(costumer)` feald can have 2 values either null or actual object if it is actual objec it means the user id is actualy a `proaccount`

## score feald clarification

i dont know the actual creatirea yet in a `map` or `object` you can have any creatirea you want and the `data type` will be `number` because it is a `score`