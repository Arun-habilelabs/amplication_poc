import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";

export type EventWhereInput = {
  eventDate?: DateTimeFilter;
  id?: StringFilter;
  name?: StringFilter;
};
