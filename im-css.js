$(function(){
	 $('.select-field').wrap('<div class="select-field-parent"></div>');
	 $('.select-field-parent').append('<div class="elem"><div class="select"><span class="text"></span><span class="icon icon-arrow-down"></span></div><div class="list"></div></div>');
	 $('.select-field-parent').each(function(){
		 var list = $(this).find('.list');
		 var select = null; var first = null;
		 $(this).find('.select-field option').each(function(x, el){
			 if(x == 0) first = $(el).html();
			 $(list).append('<div name="' + $(el).attr('value') + '">' + $(el).html() + '</div>');
			 if($(el).attr('selected') != null) {
				 select = $(el).html();
				 $(el).addClass('active');
			 }
		 });
		 
		 if(select != null) {
			 $(this).find('.select .text').html(select);
		 } else {
			 $(this).find('.select .text').html(first);
		 }
	 });
	 $('.select-field-parent .list div').click(function(){
		 var parent = $(this).parent().parent().parent();
		 var select = $(parent).find('select');
		 var icon = $(parent).find('.icon');
		 var list = $(parent).find('.list');
		 var value = $(this).attr('name');
		 
		 $(select).find('option:selected').removeAttr('selected');
		 $(select).find('option').each(function(x, el){
			 if($(el).attr('value') == value) {
				 $(el).prop('selected', true);
				 $(parent).find('.select .text').html($(el).html());
			 }
		 });
		 $(list).css('display', 'none');
		 $(icon).removeClass('icon-arrow-top').addClass('icon-arrow-down');
	 });
	 $('.select-field-parent .select').click(function() {
		 var icon = $(this).find('.icon');
		 var list = $(this).parent().find('.list');
		 var width = $(this).width();
		 
		 if($(list).css('display') == 'none') {
			 $('.select-field-parent .list').css('display', 'none');
			 $('.select-field-parent .icon').removeClass('icon-arrow-top').addClass('icon-arrow-down');
			 
			 $(list).width(width).css('display', 'block');
			 $(icon).removeClass('icon-arrow-down').addClass('icon-arrow-top');
		 } else {
			 $(list).width(width).css('display', 'none');
			 $(icon).removeClass('icon-arrow-top').addClass('icon-arrow-down');
		 }
	 });
	 $('.select-field-parent').mouseleave(function(){
		 $('.select-field-parent .list').css('display', 'none');
		 $('.select-field-parent .icon').removeClass('icon-arrow-top').addClass('icon-arrow-down');
	 });
	 
	 $('.multiple-field').wrap('<div class="multiple-field-parent"></div>');
	 $('.multiple-field-parent').append('<div class="elem"><div class="select"></div><div class="list"></div></div>');
	 $('.multiple-field-parent').each(function(){
		 var parent = $(this);
		 var list = $(this).find('.list');
		 var select = null;
		 $(this).find('.multiple-field option').each(function(x, el){
			 var selected = '';
			 if($(el).attr('selected') != null) {
				 $(el).prop('selected', true);
				 $(parent).find('.select').append('<span name="' + $(el).attr('value') + '">' + $(el).html() + '</span>');
				 selected = ' active';
			 }
			 $(list).append('<div name="' + $(el).attr('value') + '" class="' + selected + '">' + $(el).html() + '</div>');
		 });
	 });
	 $('.multiple-field-parent .select').click(function() {
		 var icon = $(this).find('.icon');
		 var list = $(this).parent().find('.list');
		 var width = $(this).width();
		 
		 if($(list).css('display') == 'none') {
			 $('.select-field-parent .list').css('display', 'none');
			 $('.select-field-parent .icon').removeClass('icon-arrow-top').addClass('icon-arrow-down');
			 
			 $(list).width(width).css('display', 'block');
			 $(icon).removeClass('icon-arrow-down').addClass('icon-arrow-top');
		 } else {
			 $(list).width(width).css('display', 'none');
			 $(icon).removeClass('icon-arrow-top').addClass('icon-arrow-down');
		 }
	 });
	 $('.multiple-field-parent .list div').click(function(){
		 var listElem = $(this);
		 var parent = $(this).parent().parent().parent();
		 var select = $(parent).find('select');
		 var list = $(parent).find('.list');
		 var value = $(this).attr('name');

		 $(select).find('option').each(function(x, el){
			 if($(el).attr('value') == value) {
				 if($(el).prop('selected') == true) {
					 $(el).removeAttr('selected');
					 $(parent).find('.select span').each(function(x, elem){
						 if($(elem).attr('name') == $(el).attr('value')) $(elem).remove();
					 });
					 $(listElem).removeClass('active');
				 } else {
					 $(el).prop('selected', true);
					 $(parent).find('.select').append('<span name="' + $(el).attr('value') + '">' + $(el).html() + '</span>');
					 $(listElem).addClass('active');
				 }
			 }
		 });
	 });
	 $('.multiple-field-parent').mouseleave(function(){
		 $('.multiple-field-parent .list').css('display', 'none');
	 });
	 
});