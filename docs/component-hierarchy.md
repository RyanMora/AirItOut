## Component Hierarchy

**AuthFormContainer**
  - AuthForm

**HomeContainer**
  - Home

**HeaderContainer**
  - Header

**PlaceIndexContainer**
  - PlaceIndex

**PlaceIndex**
  - PlaceIndexItem
  - PlaceDetailContainer

## Routes
|Path   | Component   |
|-------|-------------|
| "/" | "SessionFormContainer" |
| "/signup" | "AuthFormContainer" |
| "/signin" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/search |  "PlaceIndexContainer |
| "/places/:placesId" | "PlaceDetailContainer" |
