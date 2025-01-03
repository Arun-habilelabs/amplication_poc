import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CustomerWhereInput = {
  email?: StringFilter;
  firstName?: StringFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
};
