import { TestBed } from '@angular/core/testing';

import { MaterialCustomEditorService } from './material-custom-editor.service';

describe('MaterialCustomEditorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaterialCustomEditorService = TestBed.get(MaterialCustomEditorService);
    expect(service).toBeTruthy();
  });
});
