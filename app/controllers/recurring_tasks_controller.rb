class RecurringTasksController < ApplicationController
  before_action :set_recurring_task, only: [:show, :edit, :update, :destroy]

  def index
    recurring_tasks = RecurringTask.includes(:recurring_tasks)

    render json: recurring_tasks.to_json(:include => :recurring_tasks)
  end

  def show
  end

  def edit
  end

  def create
    @recurring_task = RecurringTask.new(recurring_task_params)
    
    category = Category.find(params[:category_id]) if (params[:category_id])

    respond_to do |format|
      if @recurring_task.save
        category.recurring_tasks << @recurring_tasks if category
        format.html { redirect_to @recurring_task, notice: 'RecurringTask was successfully created.' }
        format.json { render json: @recurring_task}
      else
        format.html { render :new }
        format.json { render json: @recurring_task.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @recurring_task.update(recurring_task_params)
        format.html { redirect_to @recurring_task, notice: 'RecurringTask was successfully updated.' }
        format.json { render :show, status: :ok, location: @recurring_task }
      else
        format.html { render :edit }
        format.json { render json: @recurring_task.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @recurring_task.destroy
    respond_to do |format|
      format.html { redirect_to recurring_tasks_url, notice: 'RecurringTask was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    def set_recurring_task
      @recurring_task = RecurringTask.find(params[:id])
    end

    def recurring_task_params
      params[:recurring_task].permit(:name)
    end
end
