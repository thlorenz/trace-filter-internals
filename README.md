# trace-filter-internals [![build status](https://secure.travis-ci.org/thlorenz/trace-filter-internals.png)](http://travis-ci.org/thlorenz/trace-filter-internals)

[![testling badge](https://ci.testling.com/thlorenz/trace-filter-internals.png)](https://ci.testling.com/thlorenz/trace-filter-internals)

Filters internal functions from a given trace.

```js
var filter = require('trace-filter-internals);
var filtered = filter(trace.split('\n');
```

## Installation

    npm install trace-filter-internals

## API


<!-- START docme generated API please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN docme TO UPDATE -->

<div>
<div class="jsdoc-githubify">
<section>
<article>
<div class="container-overview">
<dl class="details">
</dl>
</div>
<dl>
<dt>
<h4 class="name" id="filterInternals"><span class="type-signature"></span>filterInternals<span class="signature">(lines, <span class="optional">opts</span>)</span><span class="type-signature"> &rarr; {Array.&lt;string>}</span></h4>
</dt>
<dd>
<div class="description">
<p>Filters all internals specified via opts from the given lines.</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>lines</code></td>
<td class="type">
<span class="param-type">Array.&lt;string></span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>to filter lines from that have internals</p></td>
</tr>
<tr>
<td class="name"><code>opts</code></td>
<td class="type">
<span class="param-type">Object</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>specify which kind of internals to keep</p>
<h6>Properties</h6>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>unresolveds</code></td>
<td class="type">
<span class="param-type">Boolean</span>
</td>
<td class="description last"><p>unresolved addresses like <code>0x1a23c</code> are filtered from the trace unless this flag is set (default: false)</p></td>
</tr>
<tr>
<td class="name"><code>sysinternals</code></td>
<td class="type">
<span class="param-type">Boolean</span>
</td>
<td class="description last"><p>sysinternals like <code>__lib_c_start...</code> are filtered from the trace unless this flag is set (default: false)</p></td>
</tr>
<tr>
<td class="name"><code>v8internals</code></td>
<td class="type">
<span class="param-type">Boolean</span>
</td>
<td class="description last"><p>v8internals like <code>v8::internal::...</code> are filtered from the trace unless this flag is set (default: false)</p></td>
</tr>
<tr>
<td class="name"><code>v8gc</code></td>
<td class="type">
<span class="param-type">Boolean</span>
</td>
<td class="description last"><p>when v8internals are filtered, garbage collection info is as well unless this flag set  (default: true)</p></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/trace-filter-internals/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/trace-filter-internals/blob/master/index.js#L18">lineno 18</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>lines that passed through the filter</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array.&lt;string></span>
</dd>
</dl>
</dd>
</dl>
</article>
</section>
</div>

*generated with [docme](https://github.com/thlorenz/docme)*
</div>
<!-- END docme generated API please keep comment here to allow auto update -->

## License

MIT
