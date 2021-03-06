import * as logging from 'stryker-api/logging';
import * as sinon from 'sinon';

let logger = {
  isTraceEnabled: sinon.stub(),
  trace: sinon.stub(),
  isDebugEnabled: sinon.stub(),
  debug: sinon.stub(),
  isInfoEnabled: sinon.stub(),
  info: sinon.stub(),
  isWarnEnabled: sinon.stub(),
  warn: sinon.stub(),
  isErrorEnabled: sinon.stub(),
  error: sinon.stub(),
  isFatalEnabled: sinon.stub(),
  fatal: sinon.stub()
};

sinon.stub(logging, 'getLogger').returns(logger);

beforeEach(() => {
  logger.trace.reset();
  logger.debug.reset();
  logger.info.reset();
  logger.warn.reset();
  logger.error.reset();
  logger.fatal.reset();
});

export default logger;