import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { UserDocument } from '../models/users.schema';

const getCurrentUserByContext = (context: ExecutionContext): UserDocument => {
  return context.switchToHttp().getRequest().user;
};

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext): any =>
    getCurrentUserByContext(context),
);
