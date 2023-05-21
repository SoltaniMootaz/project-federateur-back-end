export class GetAllUsersController {
    constructor(getAllUsersCase) {
        this.getAllUsersCase = getAllUsersCase;
        this.getAllUsers = async (req, res) => {
            const users = await this.getAllUsersCase.getAllUsers();
            res.status(200).json(users);
        };
    }
}
//# sourceMappingURL=GetAllUsersController.js.map