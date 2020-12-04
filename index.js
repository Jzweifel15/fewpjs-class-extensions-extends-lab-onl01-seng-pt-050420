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

class Triangle extends Polygon 
{
  get isValid()
  {
    if (this.countSides === 3)
    {
      if (sides[0] + sides[1] > sides[2] && sides[1] + sides[2] > sides[0])
      {
        return true;
      }
      else 
      {
        return false;
      }
    }
    else 
    {
      return true;
    }
  }
}