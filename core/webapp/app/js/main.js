var achievementCardTemplate;

var $achievementListRow;
var $newAchievementTitle;
var $newAchievementDescription;

function init () {
  $(document).foundation();

  $achievementListRow = $('.achievement-list .row');
  $newAchievementTitle = $('[name="new-achievement-title"]');
  $newAchievementDescription = $('[name="new-achievement-description"]');

  $('.add-new-achievement button').click(addAchievement);

  initTemplates();

  fetchAchievements();
}

function initTemplates () {
  achievementCardTemplate = Handlebars.compile($("#achievement-card-template").html());
}


function fetchAchievements () {
  $.ajax({
    dataType: "json",
    url: '/projectlife/api/achievements/',
    success: function (payload, textStatus) {
      populateAchievements(payload);
    }
  });
}

function populateAchievements (achievements) {
  $achievementListRow.html('');

  achievements.forEach(function (achievement) {
    var html = achievementCardTemplate(achievement);
    $achievementListRow.append(html);
  });
  $achievementListRow.find('div:last-child').addClass('end');
}

function addAchievement() {
  var newAchievement = {
    title: $newAchievementTitle.val(),
    description: $newAchievementDescription.val(),
    category_id: 0,
    achieved: false
  };

  $.post('/projectlife/api/achievements/', newAchievement, function(data, textStatus) {
    $newAchievementTitle.val('');
    $newAchievementDescription.val('');

    fetchAchievements();
  }, "json");
}

init();
