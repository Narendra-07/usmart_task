import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCertificateComponent } from './get-certificate.component';

describe('GetCertificateComponent', () => {
  let component: GetCertificateComponent;
  let fixture: ComponentFixture<GetCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
