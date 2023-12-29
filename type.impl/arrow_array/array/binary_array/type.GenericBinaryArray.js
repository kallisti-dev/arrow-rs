(function() {var type_impls = {
"arrow_array":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GenericByteArray%3CGenericBinaryType%3COffsetSize%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/binary_array.rs.html#26-101\">source</a><a href=\"#impl-GenericByteArray%3CGenericBinaryType%3COffsetSize%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;OffsetSize: <a class=\"trait\" href=\"arrow_array/array/list_array/trait.OffsetSizeTrait.html\" title=\"trait arrow_array::array::list_array::OffsetSizeTrait\">OffsetSizeTrait</a>&gt; <a class=\"type\" href=\"arrow_array/array/binary_array/type.GenericBinaryArray.html\" title=\"type arrow_array::array::binary_array::GenericBinaryArray\">GenericBinaryArray</a>&lt;OffsetSize&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_data_type\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/array/binary_array.rs.html#29-31\">source</a><h4 class=\"code-header\">pub const fn <a href=\"arrow_array/array/binary_array/type.GenericBinaryArray.html#tymethod.get_data_type\" class=\"fn\">get_data_type</a>() -&gt; <a class=\"enum\" href=\"arrow_schema/datatype/enum.DataType.html\" title=\"enum arrow_schema::datatype::DataType\">DataType</a></h4></section><span class=\"item-info\"><div class=\"stab deprecated\"><span class=\"emoji\">👎</span><span>Deprecated: please use <code>Self::DATA_TYPE</code> instead</span></div></span></summary><div class=\"docblock\"><p>Get the data type of the array.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_vec\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/array/binary_array.rs.html#36-38\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/array/binary_array/type.GenericBinaryArray.html#tymethod.from_vec\" class=\"fn\">from_vec</a>(v: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt;) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Creates a <a href=\"arrow_array/array/binary_array/type.GenericBinaryArray.html\" title=\"type arrow_array::array::binary_array::GenericBinaryArray\">GenericBinaryArray</a> from a vector of byte slices</p>\n<p>See also <a href=\"arrow_array/array/byte_array/struct.GenericByteArray.html#method.from_iter_values\" title=\"associated function arrow_array::array::byte_array::GenericByteArray::from_iter_values\"><code>Self::from_iter_values</code></a></p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_opt_vec\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/array/binary_array.rs.html#41-43\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/array/binary_array/type.GenericBinaryArray.html#tymethod.from_opt_vec\" class=\"fn\">from_opt_vec</a>(v: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt;&gt;) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Creates a <a href=\"arrow_array/array/binary_array/type.GenericBinaryArray.html\" title=\"type arrow_array::array::binary_array::GenericBinaryArray\">GenericBinaryArray</a> from a vector of Optional (null) byte slices</p>\n</div></details><section id=\"method.from_list\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/array/binary_array.rs.html#45-81\">source</a><h4 class=\"code-header\">fn <a href=\"arrow_array/array/binary_array/type.GenericBinaryArray.html#tymethod.from_list\" class=\"fn\">from_list</a>(v: <a class=\"struct\" href=\"arrow_array/array/list_array/struct.GenericListArray.html\" title=\"struct arrow_array::array::list_array::GenericListArray\">GenericListArray</a>&lt;OffsetSize&gt;) -&gt; Self</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.take_iter\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/array/binary_array.rs.html#84-89\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/array/binary_array/type.GenericBinaryArray.html#tymethod.take_iter\" class=\"fn\">take_iter</a>&lt;'a&gt;(\n    &amp;'a self,\n    indexes: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;&gt; + 'a\n) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt;&gt; + 'a</h4></section></summary><div class=\"docblock\"><p>Returns an iterator that returns the values of <code>array.value(i)</code> for an iterator with each element <code>i</code></p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.take_iter_unchecked\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/array/binary_array.rs.html#95-100\">source</a><h4 class=\"code-header\">pub unsafe fn <a href=\"arrow_array/array/binary_array/type.GenericBinaryArray.html#tymethod.take_iter_unchecked\" class=\"fn\">take_iter_unchecked</a>&lt;'a&gt;(\n    &amp;'a self,\n    indexes: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;&gt; + 'a\n) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt;&gt; + 'a</h4></section></summary><div class=\"docblock\"><p>Returns an iterator that returns the values of <code>array.value(i)</code> for an iterator with each element <code>i</code></p>\n<h5 id=\"safety\"><a href=\"#safety\">Safety</a></h5>\n<p>caller must ensure that the indexes in the iterator are less than the <code>array.len()</code></p>\n</div></details></div></details>",0,"arrow_array::array::binary_array::BinaryArray","arrow_array::array::binary_array::LargeBinaryArray"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-GenericByteArray%3CGenericBinaryType%3COffsetSize%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/mod.rs.html#485-489\">source</a><a href=\"#impl-PartialEq-for-GenericByteArray%3CGenericBinaryType%3COffsetSize%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;OffsetSize: <a class=\"trait\" href=\"arrow_array/array/list_array/trait.OffsetSizeTrait.html\" title=\"trait arrow_array::array::list_array::OffsetSizeTrait\">OffsetSizeTrait</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"type\" href=\"arrow_array/array/binary_array/type.GenericBinaryArray.html\" title=\"type arrow_array::array::binary_array::GenericBinaryArray\">GenericBinaryArray</a>&lt;OffsetSize&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/mod.rs.html#486-488\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","arrow_array::array::binary_array::BinaryArray","arrow_array::array::binary_array::LargeBinaryArray"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CGenericByteArray%3CGenericStringType%3COffsetSize%3E%3E%3E-for-GenericByteArray%3CGenericBinaryType%3COffsetSize%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/binary_array.rs.html#121-134\">source</a><a href=\"#impl-From%3CGenericByteArray%3CGenericStringType%3COffsetSize%3E%3E%3E-for-GenericByteArray%3CGenericBinaryType%3COffsetSize%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;OffsetSize: <a class=\"trait\" href=\"arrow_array/array/list_array/trait.OffsetSizeTrait.html\" title=\"trait arrow_array::array::list_array::OffsetSizeTrait\">OffsetSizeTrait</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"arrow_array/array/byte_array/struct.GenericByteArray.html\" title=\"struct arrow_array::array::byte_array::GenericByteArray\">GenericByteArray</a>&lt;<a class=\"struct\" href=\"arrow_array/types/struct.GenericStringType.html\" title=\"struct arrow_array::types::GenericStringType\">GenericStringType</a>&lt;OffsetSize&gt;&gt;&gt; for <a class=\"type\" href=\"arrow_array/array/binary_array/type.GenericBinaryArray.html\" title=\"type arrow_array::array::binary_array::GenericBinaryArray\">GenericBinaryArray</a>&lt;OffsetSize&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/binary_array.rs.html#124-133\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(value: <a class=\"type\" href=\"arrow_array/array/string_array/type.GenericStringArray.html\" title=\"type arrow_array::array::string_array::GenericStringArray\">GenericStringArray</a>&lt;OffsetSize&gt;) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<GenericByteArray<GenericStringType<OffsetSize>>>","arrow_array::array::binary_array::BinaryArray","arrow_array::array::binary_array::LargeBinaryArray"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CVec%3COption%3C%26%5Bu8%5D%3E%3E%3E-for-GenericByteArray%3CGenericBinaryType%3COffsetSize%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/binary_array.rs.html#103-107\">source</a><a href=\"#impl-From%3CVec%3COption%3C%26%5Bu8%5D%3E%3E%3E-for-GenericByteArray%3CGenericBinaryType%3COffsetSize%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;OffsetSize: <a class=\"trait\" href=\"arrow_array/array/list_array/trait.OffsetSizeTrait.html\" title=\"trait arrow_array::array::list_array::OffsetSizeTrait\">OffsetSizeTrait</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt;&gt;&gt; for <a class=\"type\" href=\"arrow_array/array/binary_array/type.GenericBinaryArray.html\" title=\"type arrow_array::array::binary_array::GenericBinaryArray\">GenericBinaryArray</a>&lt;OffsetSize&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/binary_array.rs.html#104-106\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(v: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt;&gt;) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<Vec<Option<&[u8]>>>","arrow_array::array::binary_array::BinaryArray","arrow_array::array::binary_array::LargeBinaryArray"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CGenericListArray%3CT%3E%3E-for-GenericByteArray%3CGenericBinaryType%3CT%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/binary_array.rs.html#115-119\">source</a><a href=\"#impl-From%3CGenericListArray%3CT%3E%3E-for-GenericByteArray%3CGenericBinaryType%3CT%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"arrow_array/array/list_array/trait.OffsetSizeTrait.html\" title=\"trait arrow_array::array::list_array::OffsetSizeTrait\">OffsetSizeTrait</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"arrow_array/array/list_array/struct.GenericListArray.html\" title=\"struct arrow_array::array::list_array::GenericListArray\">GenericListArray</a>&lt;T&gt;&gt; for <a class=\"type\" href=\"arrow_array/array/binary_array/type.GenericBinaryArray.html\" title=\"type arrow_array::array::binary_array::GenericBinaryArray\">GenericBinaryArray</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/binary_array.rs.html#116-118\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(v: <a class=\"struct\" href=\"arrow_array/array/list_array/struct.GenericListArray.html\" title=\"struct arrow_array::array::list_array::GenericListArray\">GenericListArray</a>&lt;T&gt;) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<GenericListArray<T>>","arrow_array::array::binary_array::BinaryArray","arrow_array::array::binary_array::LargeBinaryArray"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CVec%3C%26%5Bu8%5D%3E%3E-for-GenericByteArray%3CGenericBinaryType%3COffsetSize%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/binary_array.rs.html#109-113\">source</a><a href=\"#impl-From%3CVec%3C%26%5Bu8%5D%3E%3E-for-GenericByteArray%3CGenericBinaryType%3COffsetSize%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;OffsetSize: <a class=\"trait\" href=\"arrow_array/array/list_array/trait.OffsetSizeTrait.html\" title=\"trait arrow_array::array::list_array::OffsetSizeTrait\">OffsetSizeTrait</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt;&gt; for <a class=\"type\" href=\"arrow_array/array/binary_array/type.GenericBinaryArray.html\" title=\"type arrow_array::array::binary_array::GenericBinaryArray\">GenericBinaryArray</a>&lt;OffsetSize&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/binary_array.rs.html#110-112\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(v: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt;) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<Vec<&[u8]>>","arrow_array::array::binary_array::BinaryArray","arrow_array::array::binary_array::LargeBinaryArray"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()