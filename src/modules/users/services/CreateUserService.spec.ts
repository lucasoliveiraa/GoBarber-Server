import AppError from '@shared/errors/AppError';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let fakeCacheProvider: FakeCacheProvider;
let fakeHashProvider: FakeHashProvider;
let createUser: CreateUserService;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository;
    fakeHashProvider = new FakeHashProvider;
    fakeCacheProvider = new FakeCacheProvider;

    createUser = new CreateUserService(fakeUsersRepository, fakeHashProvider , fakeCacheProvider);
  });

  it('should be able to create a new user', async () => {
    const user = await createUser.execute({
      name: 'khon doe',
      email: 'khon@gmail.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user with same email from another', async () => {
    await createUser.execute({
      name: 'khon doe',
      email: 'khon@gmail.com',
      password: '123456',
    });

    await expect(createUser.execute({
      name: 'khon doe',
      email: 'khon@gmail.com',
      password: '123456',
    }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
