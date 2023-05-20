import { isEmpty } from "../../../Validations/validators.js";
export class GetUserProfileController {
    constructor(getProfileUseCase) {
        this.getProfileUseCase = getProfileUseCase;
        this.getProfile = async (req, res) => {
            const { userId } = req.params;
            if (isEmpty(userId)) {
                res.status(400).json({ error: "User ID is required" });
                return;
            }
            try {
                const profile = await this.getProfileUseCase.getUserProfile(userId);
                res.json(profile);
            }
            catch (error) {
                res.status(500).json({ error: "Internal server error" });
            }
        };
    }
}
//# sourceMappingURL=getUserProfileController.js.map