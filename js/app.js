$(document).ready(function(){
    // addTask
    $('#addTaskButton').on('click', function () {
        var $listItem = $('<li>');
        $listItem.append('<input type="checkbox">');
        $listItem.append('<label>' +$('#new-task').val() + '</label>');
        $listItem.append('<input type="text">');
        $listItem.append('<button class="edit">编辑</button>');
        $listItem.append('<button class="delete">删除</button>');
        $('#incomplete-tasks').prepend($listItem);
        $('#new-task').val("");
    });
    // append to completed
    $('#incomplete-tasks').on('change', 'input[type=checkbox]', function () {
        $(this).parent().find('button.edit').remove();
        $('#completed-tasks').append($(this).parent());
    }).on('click', 'button.edit', function () {
        var listItem = $(this).parent();
        if (listItem.hasClass('editMode')) {
            listItem.removeClass('editMode');
            listItem.find('label').text(listItem.find('input[type=text]').val());
            $(this).text('编辑');
        }
        else {
            listItem.addClass('editMode');
            listItem.find('input[type=text]').val(listItem.find('label').text());
            $(this).text('保存');
        }
    }).on('click', 'button.delete', function () {
        $(this).parent().detach();
    });
    // append to incomplete
    $('#completed-tasks').on('change', 'input[type=checkbox]', function () {
        $(this).parent().find('button.delete').before('<button class="edit">编辑</button>')
        $('#incomplete-tasks').append($(this).parent());
    }).on('click', 'button.delete', function () {
        $(this).parent().detach();
    });


});