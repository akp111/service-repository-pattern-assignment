import { UserRequestDto } from './Database'
import { UserService } from './User.service'

// NOTE: Make userService public and not private. This is required for the tests!
export class UserController {
    public readonly userService = new UserService();

    async store(user: UserRequestDto){
        return this.userService.createUser(user);
    }
}
