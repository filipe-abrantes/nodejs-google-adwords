export namespace BatchJobProcessingError {
  export enum Reason {
    INPUT_FILE_CORRUPTION = 'INPUT_FILE_CORRUPTION',
    INTERNAL_ERROR = 'INTERNAL_ERROR',
    DEADLINE_EXCEEDED = 'DEADLINE_EXCEEDED',
    FILE_FORMAT_ERROR = 'FILE_FORMAT_ERROR',
  }
}