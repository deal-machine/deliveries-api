import { User } from "@entities/user";
import { Encrypter } from "@infra/protocols/encrypter";
import { IdGenerator } from "@infra/protocols/id-generator";
import { UserCreateDTO } from "@usecases/create-user";
import { UserRepository } from "@data/protocols/user-repository";

export class UserRepositoryInMemory implements UserRepository {
    private readonly userEntity: User[];
    private readonly idGenerator: IdGenerator;
    private readonly encrypter: Encrypter;

    constructor(IdGenerator: IdGenerator, encrypter: Encrypter) {
        this.userEntity = [];
        this.idGenerator = IdGenerator;
        this.encrypter = encrypter;
    }

    async findAll(): Promise<User[]> {
        return this.userEntity;
    }

    async findByEmail(email: string): Promise<User | undefined> {
        return this.userEntity.find((user) => user.email === email);
    }

    async create(user: UserCreateDTO): Promise<User> {
        const newUser: User = {
            id: this.idGenerator.random(),
            email: user.email,
            name: user.name.toUpperCase(),
            password: await this.encrypter.hash(user.password),
        };

        this.userEntity.push(newUser);

        return newUser;
    }

    async exists(email: string): Promise<boolean> {
        const userExists = this.userEntity.find((user) => user.email === email);
        return !!userExists;
    }
}
