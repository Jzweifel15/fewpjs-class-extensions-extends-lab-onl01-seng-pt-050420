class Polygon
{
  constructor(sides)
  {
    this._sides = sides;
  }

  get countSides()
  {
    return this._sides.length;
  }

  get perimeter()
  {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return this._sides.reduce(reducer);
  }
}

