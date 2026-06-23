import { TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach } from 'vitest';
import { TransporteService } from './transporte';

describe('Transporte', () => {
  let service: TransporteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransporteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
