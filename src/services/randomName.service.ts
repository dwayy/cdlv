import * as angular from 'angular';

export class RandomNameService {

    constructor(private $http: ng.IHttpService) {
    }

    public getName() {
        var characterId = Math.floor(Math.random() * (87 - 1)) + 1;
        
        return this.$http.get<{name: string}>('http://swapi.co/api/people/' + characterId)
            .then(function(res) {
                return res.data.name;
            }).catch(function(err){
                return err.data;
            });
     }
}

RandomNameService.$inject = ["$http"];