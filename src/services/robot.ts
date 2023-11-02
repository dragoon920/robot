import Crate from "./crate";
import WarehouseMap from "./warehouseMap";
class Robot {
  x: number;
  y: number;
  shape: string;
  warehouseWidth: number;
  warehouseHeight: number;
  crates: Crate[];
  isLifting: boolean;

  constructor(warehouseWidth: number, warehouseHeight: number, crates: Crate[]) {
    this.x = 0; // initial x-coordinate
    this.y = warehouseHeight -1; // initial y-coordinate
    this.shape = '&';
    this.warehouseWidth = warehouseWidth;
    this.warehouseHeight = warehouseHeight;
    this.crates = crates;
    this.isLifting = false;
  }

  action(command: string) {
    switch (command) {
      case 'N':
        if (this.y > 0) {
          this.y--;
        }
        break;
      case 'S':
        if (this.y < this.warehouseHeight - 1) {
          this.y++;
        }
        break;
      case 'E':
        if (this.x < this.warehouseWidth - 1) {
            this.x++;
        }
        break;
      case 'W':
        if (this.x > 0) {
            this.x--;
        }
        break;

      case 'G':
        this.liftCrate();
        break;

      case 'D':
        this.dropCrate();
        break;

      default:
        console.log("Invalid command");
    }
  }

  private liftCrate(): void {
    if (!this.isLifting && this.isCrateAtPosition(this.x, this.y)) {
      this.isLifting = true;
      this.crates = this.crates.filter((crate) => crate.getPosition().x !== this.x || crate.getPosition().y !== this.y);
      this.shape = '!';
      console.log('Crate lifted.');
    } else if (this.isLifting) {
      console.log('Already lifting a crate.');
    } else {
      console.log('No crate to lift at this position.');
    }
  }

  private dropCrate(): void {
    if (this.isLifting && !this.isCrateAtPosition(this.x, this.y)) {
      this.isLifting = false;
      this.crates.push(new Crate(this.x, this.y));
      this.shape = '&';
      console.log('Crate dropped.');
    } else if (!this.isLifting) {
      console.log('Already empty');
    } else if (this.isCrateAtPosition(this.x, this.y)) {
      console.log('Cannot drop on top of another Crate');
    }
  }

  isCrateAtPosition(x: number, y: number) {
    return this.crates.some((crate) => { 
      return crate.getPosition().x === this.x && crate.getPosition().y === this.y
    })
  }

  getCrates(): Crate[] {
    return this.crates;
  }

  getPosition() {
      return `(${this.x},${this.y})`;
  }
}

export default Robot;