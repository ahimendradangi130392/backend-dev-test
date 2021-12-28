import { Module} from '@nestjs/common';
import { UserModule } from './users/user.modules';

@Module({
    imports:[UserModule],
    exports:[UserModule],  
})

export class FeaturesModule{}
