'use strict';

var v8internalsRegex = new RegExp(
    'node::Start\\(|node`(?:start\\+)?0x[0-9A-Fa-f]+'                                // node startup
  + '|v8::internal::|v8::Function::Call|v8::Function::NewInstance'                   // v8 internal C++
  + '|Builtin:|Stub:|StoreIC:|LoadIC:|LoadPolymorphicIC:|KeyedLoadIC:'               // v8 generated boilerplate
  + '|<Unknown Address>|_platform_\\w+\\$VARIANT\\$|DYLD-STUB\\$|_os_lock_spin_lock' // unknown and lower level things
  + '|\\(root'
);

var sysinternalsRegex = /^\W+dyld|__libc_start/;

var unresolvedsRegex = /^\W*0x[0-9A-Fa-f]+\W*$/ // lonely unresolved hex address
var v8gcRegex = /v8::internal::Heap::Scavenge/ 

module.exports = 
  
/**
 * Filters all internals specified via opts from the given lines.
 * 
 * @name filterInternals
 * @function
 * @param {Array.<string>} lines to filter lines from that have internals
 * @param {Object=} opts specify which kind of internals to keep
 * @param {Boolean} opts.unresolveds unresolved addresses like `0x1a23c` are filtered from the trace unless this flag is set (default: false)
 * @param {Boolean} opts.sysinternals sysinternals like `__lib_c_start...` are filtered from the trace unless this flag is set (default: false)
 * @param {Boolean} opts.v8internals v8internals like `v8::internal::...` are filtered from the trace unless this flag is set (default: false)
 * @param {Boolean} opts.v8gc        when v8internals are filtered, garbage collection info is as well unless this flag set  (default: true)
 * @return {Array.<string>} lines that passed through the filter
 */
function filterInternals(lines, opts) {
  opts = opts || {};
  var unresolveds  = opts.unresolveds
    , sysinternals = opts.sysinternals
    , v8internals  = opts.v8internals
    , v8gc         = opts.v8gc

  function notInternal(l) {
    if (v8gc && v8gcRegex.test(l)) return true;
    return (unresolveds   || !unresolvedsRegex.test(l)) 
        && (sysinternals  || !sysinternalsRegex.test(l))
        && (v8internals   || !v8internalsRegex.test(l))
  }

  return lines.filter(notInternal);
}
