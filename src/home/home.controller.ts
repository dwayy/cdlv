import { RandomNameService } from '../services/randomName.service'

export class HomeController {
    public name: string;

    constructor(private randomNameService: RandomNameService) {
        this.name = 'Grenoble';        
    }

    public getRandomName() {
        this.randomNameService.getName().then((name: string) => {
            this.name = name;
        });
    }
}

HomeController.$inject = ["randomName-service"];