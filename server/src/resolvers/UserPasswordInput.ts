import { Field, InputType } from 'type-graphql';

@InputType()
export class UserPasswordInput {
  @Field()
  username: string;
  @Field()
  password: string;
  @Field()
  email: string;
}
