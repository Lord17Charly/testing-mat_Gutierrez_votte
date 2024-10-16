import { ComponentFixture, TestBed } from "@angular/core/testing";
import mediaData from "./media.json";
import { MediaComponent } from "./media.component";

describe("MediaComponent", () => {
  let component: MediaComponent;
  let fixture: ComponentFixture<MediaComponent>;
  let numerosColumna1: number[] = mediaData.columa1;
  let numerosColumna2: number[] = mediaData.columna2;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Should return media =550.6 if input is [160,591,114,229,230,270,128,1657,624,1503]", () => {
    const media = component.obtenerMedia(numerosColumna1);
    expect(media).toBeCloseTo(550.6, 1);
  });

  it("Should return media =60.32 if input is [15.0,69.9,6.5,22.4,28.4,65.9,19.4,198.7,38.8,138.2]", () => {
    const media = component.obtenerMedia(numerosColumna2);
    expect(media).toBeCloseTo(60.32, 2);
  });
});
