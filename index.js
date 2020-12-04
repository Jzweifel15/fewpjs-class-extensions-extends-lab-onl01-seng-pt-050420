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
      if (this._sides[0] + this._sides[1] > this._sides[2] && 
          this._sides[1] + this._sides[2] > this._sides[0] && 
          this._sides[0] + this._sides[2] > this._sides[1])
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