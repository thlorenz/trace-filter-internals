'use strict';

var test = require('tape')
  , filter = require('../')


var stack1 = [
    'iojs 86454 181016967: profile-1ms:'
  , '            node`v8::internal::Runtime_ArrayConcat(int, v8::internal::Object**, v8::internal::Isolate*)+0x1249'
  , '            0x36197f9060bb Stub:CEntryStub'
  , '            0x36197fa3bf9c LazyCompile:*ArrayConcatJS native array.js:366'
  , '            0x36197f91f0c0 Builtin:JSEntryTrampoline'
  , '            0x36197f91dff1 Stub:JSEntryStub'
  , '            node`v8::internal::Invoke(bool, v8::internal::Handle<v8::internal::JSFunction>, v8::internal::Handle<v8::internal::Object>, int, v8::internal::Handle<v8::internal::Object>*)+0x238'
  , '            node`v8::internal::CallJsBuiltin(v8::internal::Isolate*, char const*, v8::internal::(anonymous namespace)::BuiltinArguments<(v8::internal::BuiltinExtraArguments)0>)+0x312'
  , '            node`v8::internal::Builtin_ArrayConcat(int, v8::internal::Object**, v8::internal::Isolate*)+0x2c3'
  , '            0x36197f9060bb Stub:CEntryStub'
  , '            0x36197fa3ad9c LazyCompile:*toFib /Volumes/d/dev/js/projects/cpuprofilify/example/fibonacci.js:43'
  , '            0x36197f91ea55 Builtin:ArgumentsAdaptorTrampoline'
  , '            0x36197fa139d1 LazyCompile:~reduce native array.js:1082'
  , '            0x36197fa12f5d LazyCompile:~cal_arrayConcat /Volumes/d/dev/js/projects/cpuprofilify/example/fibonacci.js:41'
  , '            0x36197fa0b490 LazyCompile:~onRequest /Volumes/d/dev/js/projects/cpuprofilify/example/fibonacci.js:27'
  , '            0x36197f9eafb4 LazyCompile:~emit events.js:56'
  , '            0x36197f91ea55 Builtin:ArgumentsAdaptorTrampoline'
  , '            0x36197fa09975 LazyCompile:~parserOnIncoming _http_server.js:401'
  , '            0x36197fa06c38 LazyCompile:~parserOnHeadersComplete _http_common.js:43'
  , '            0x36197f91f0c0 Builtin:JSEntryTrampoline'
  , '            0x36197f91dff1 Stub:JSEntryStub'
  , '            node`v8::internal::Invoke(bool, v8::internal::Handle<v8::internal::JSFunction>, v8::internal::Handle<v8::internal::Object>, int, v8::internal::Handle<v8::internal::Object>*)+0x238'
  , '            node`v8::Function::Call(v8::Handle<v8::Value>, int, v8::Handle<v8::Value>*)+0xc6'
  , '            node`node::Parser::on_headers_complete_()+0x1f3'
  , '            node`http_parser_execute+0x319'
  , '            node`node::Parser::Execute(v8::FunctionCallbackInfo<v8::Value> const&)+0x106'
  , '            node`v8::internal::FunctionCallbackArguments::Call(void (*)(v8::FunctionCallbackInfo<v8::Value> const&))+0x9f'
  , '            node`v8::internal::Builtin_HandleApiCall(int, v8::internal::Object**, v8::internal::Isolate*)+0x22b'
  , '            0x36197f9060bb Stub:CEntryStub'
  , '            0x36197fa06147 LazyCompile:~socketOnData _http_server.js:321'
  , '            0x36197f9eaf4f LazyCompile:~emit events.js:56'
  , '            0x36197f91ea55 Builtin:ArgumentsAdaptorTrampoline'
  , '            0x36197f9fe13c LazyCompile:~readableAddChunk _stream_readable.js:119'
  , '            0x36197f9fdbca LazyCompile:~Readable.push _stream_readable.js:95'
  , '            0x36197f91ea55 Builtin:ArgumentsAdaptorTrampoline'
  , '            0x36197f9fc3bd LazyCompile:~onread net.js:487'
  , '            0x36197f91ea55 Builtin:ArgumentsAdaptorTrampoline'
  , '            0x36197f91f0bc Builtin:JSEntryTrampoline'
  , '            0x36197f91dff1 Stub:JSEntryStub'
  , '            node`v8::internal::Invoke(bool, v8::internal::Handle<v8::internal::JSFunction>, v8::internal::Handle<v8::internal::Object>, int, v8::internal::Handle<v8::internal::Object>*)+0x238'
  , '            node`v8::Function::Call(v8::Handle<v8::Value>, int, v8::Handle<v8::Value>*)+0xc6'
  , '            node`node::AsyncWrap::MakeCallback(v8::Handle<v8::Function>, int, v8::Handle<v8::Value>*)+0x21d'
  , '            node`node::StreamWrapCallbacks::DoRead(uv_stream_s*, long, uv_buf_t const*, uv_handle_type)+0x276'
  , '            node`uv__stream_io+0x4f2'
  , '            node`uv__io_poll+0x62d'
  , '            node`uv_run+0x114'
  , '            node`node::Start(int, char**)+0x1ce'
  , '            node`start+0x34'
  , '            node`0x3'
];

function inspect(obj, depth) {
  console.error(require('util').inspect(obj, false, depth || 5, true));
}

test('\nwhen filtering stack with v8 internals using default opts', function (t) {
  var res = filter(stack1);
  t.deepEqual(res
    , [ 'iojs 86454 181016967: profile-1ms:',
        '            0x36197fa3bf9c LazyCompile:*ArrayConcatJS native array.js:366',
        '            0x36197fa3ad9c LazyCompile:*toFib /Volumes/d/dev/js/projects/cpuprofilify/example/fibonacci.js:43',
        '            0x36197fa139d1 LazyCompile:~reduce native array.js:1082',
        '            0x36197fa12f5d LazyCompile:~cal_arrayConcat /Volumes/d/dev/js/projects/cpuprofilify/example/fibonacci.js:41',
        '            0x36197fa0b490 LazyCompile:~onRequest /Volumes/d/dev/js/projects/cpuprofilify/example/fibonacci.js:27',
        '            0x36197f9eafb4 LazyCompile:~emit events.js:56',
        '            0x36197fa09975 LazyCompile:~parserOnIncoming _http_server.js:401',
        '            0x36197fa06c38 LazyCompile:~parserOnHeadersComplete _http_common.js:43',
        '            node`node::Parser::on_headers_complete_()+0x1f3',
        '            node`http_parser_execute+0x319',
        '            node`node::Parser::Execute(v8::FunctionCallbackInfo<v8::Value> const&)+0x106',
        '            0x36197fa06147 LazyCompile:~socketOnData _http_server.js:321',
        '            0x36197f9eaf4f LazyCompile:~emit events.js:56',
        '            0x36197f9fe13c LazyCompile:~readableAddChunk _stream_readable.js:119',
        '            0x36197f9fdbca LazyCompile:~Readable.push _stream_readable.js:95',
        '            0x36197f9fc3bd LazyCompile:~onread net.js:487',
        '            node`node::AsyncWrap::MakeCallback(v8::Handle<v8::Function>, int, v8::Handle<v8::Value>*)+0x21d',
        '            node`node::StreamWrapCallbacks::DoRead(uv_stream_s*, long, uv_buf_t const*, uv_handle_type)+0x276',
        '            node`uv__stream_io+0x4f2',
        '            node`uv__io_poll+0x62d',
        '            node`uv_run+0x114' ]
    , 'filters out v8 internals'
  )
  t.end()
})

test('\nwhen filtering stack with v8 internals indicating in opts to keep v8internals', function (t) {
  var res = filter(stack1, { v8internals: true });
  t.deepEqual(res, stack1, 'filters no lines')
  t.end()
})

var stack2 = [
    'iojs 86454 181012037: profile-1ms:'
  , '              libsystem_kernel.dylib`read+0xa'
  , '              __libc_start+0xfa'
  , '              node`uv__io_poll+0x62d'
  , '              node`uv_run+0x114'
  , '              node`node::Start(int, char**)+0x1ce'
  , '              node`start+0x34'
  , '              node`0x3'
];

test('\nwhen filtering stack with sysinternals and v8internals with default opts', function (t) {
  var res = filter(stack2);
  t.deepEqual(res
    , [ 'iojs 86454 181012037: profile-1ms:',
        '              libsystem_kernel.dylib`read+0xa',
        '              node`uv__io_poll+0x62d',
        '              node`uv_run+0x114' ]
    , 'filters out sysinternal functions'
  )
  t.end()
})

test('\nwhen filtering stack with sysinternals and v8internals indicating in opts to keep sysinternals', function (t) {
  var res = filter(stack2, { sysinternals: true });
  t.deepEqual(res
    , [ 'iojs 86454 181012037: profile-1ms:',
        '              libsystem_kernel.dylib`read+0xa',
        '              __libc_start+0xfa',
        '              node`uv__io_poll+0x62d',
        '              node`uv_run+0x114' ] 
    , 'filters only lines considered v8 (also node) internals'
  )
  t.end()
})

test('\nwhen filtering stack with sysinternals and v8internals indicating in opts to keep sysinternals and v8internals', function (t) {
  var res = filter(stack2, { sysinternals: true, v8internals: true });
  t.deepEqual(res, stack2, 'filters no lines')
  t.end()
})
