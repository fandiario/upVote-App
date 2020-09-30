var app = new Vue({
    el: '#app',
    data: {
      message: 'upVote-App',
      currentPage: 'home',
      submissions: [],
      selectedSubmission: {}
    },
    methods: {
      fetchData () {
        axios
          .get('http://localhost:3000/submissions')
          .then (({ data }) => {
            this.currentPage = 'dashboard'
            // console.log (data)
            this.submissions = data
          })
          .catch (err => {
            console.log (err)
          })
      },
      upvote (id) {
        const submission = this.submissions.find(
          submission => submission.id === id
        )
        submission.votes ++
      },
      downvote (id) {
        const submission = this.submissions.find(
          submission => submission.id === id
        )
        submission.votes --
      }
    },
    computed: {
      sortedSubmissions () {
        return this.submissions.sort ((a, b) => {
          return b.votes - a.votes
        })
      }
    }
  })